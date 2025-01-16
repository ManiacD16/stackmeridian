import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  {
    name: "Blockchain",
    code: `// Example Blockchain code
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const contractAddress = '0xYourContractAddress';
const abi = [/* Your ABI here */];

const contract = new web3.eth.Contract(abi, contractAddress);

async function getBalance(address: string) {
  const balance = await contract.methods.balanceOf(address).call();
  console.log(\`Balance of \${address}: \${balance}\`);
}

getBalance('0xYourWalletAddress');`,
  },
  {
    name: "AI",
    code: `// Example AI code using TensorFlow.js
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({ units: 32, inputShape: [10], activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

model.compile({ loss: 'binaryCrossentropy', optimizer: 'adam', metrics: ['accuracy'] });

const data = tf.randomNormal([100, 10]);
const labels = tf.randomUniform([100, 1], 0, 2, 'int32');

async function train() {
  await model.fit(data, labels, { epochs: 10 });
  console.log('Model trained!');
}

train();`,
  },
  //   {
  //     name: "Fintech",
  //     code: `// Example Fintech code (Simple transaction)
  // class Transaction {
  //   constructor(public from: string, public to: string, public amount: number) {}

  //   processTransaction() {
  //     console.log(\`Processing transaction from \${this.from} to \${this.to} for \${this.amount} USD\`);
  //   }
  // }

  // const transaction = new Transaction('0xSenderAddress', '0xReceiverAddress', 100);
  // transaction.processTransaction();`,
  //   },
  {
    name: "NFTs",
    code: `// Example NFTs code (Minting an NFT)
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();

const nftContractAddress = '0xYourNFTContractAddress';
const nftABI = [/* Your NFT contract ABI here */];

const nftContract = new ethers.Contract(nftContractAddress, nftABI, signer);

async function mintNFT(toAddress: string, tokenURI: string) {
  const tx = await nftContract.mint(toAddress, tokenURI);
  console.log('NFT minted with transaction hash:', tx.hash);
}

mintNFT('0xReceiverAddress', 'ipfs://yourTokenURI');`,
  },
  {
    name: "IoT",
    code: `// Example IoT code (Simulating an IoT sensor)
const sensorData = {
  temperature: 22.5,
  humidity: 60,
};

function sendSensorData(data: { temperature: number, humidity: number }) {
  console.log(\`Sending sensor data: \${JSON.stringify(data)}\`);
}

setInterval(() => {
  sendSensorData(sensorData);
}, 5000);`,
  },
  {
    name: "TypeScript",
    code: `export const createQueryBuilder = <T extends Record<string, any>>(
  table: string
) => {
  let queryParts: string[] = [];
  let whereClauses: string[] = [];
  let orderClauses: string[] = [];
  let limitValue: number | null = null;
  let offsetValue: number | null = null;

  const builder = {
    select(...fields: (keyof T)[]): typeof builder {
      queryParts = fields.length ? fields.map(String) : ['*'];
      return builder;
    },

    where(field: keyof T, operator: string, value: any): typeof builder {
      const sanitizedValue = typeof value === 'string'
        ? \`'\${value.replace(/'/g, "''")}'\`
        : value;
      whereClauses.push(\`\${String(field)} \${operator} \${sanitizedValue}\`);
      return builder;
    },

    andWhere(field: keyof T, operator: string, value: any): typeof builder {
      return this.where(field, operator, value);
    },

    orWhere(field: keyof T, operator: string, value: any): typeof builder {
      if (whereClauses.length === 0) {
        return this.where(field, operator, value);
      }
      const sanitizedValue = typeof value === 'string'
        ? \`'\${value.replace(/'/g, "''")}'\`
        : value;
      whereClauses.push(\`OR \${String(field)} \${operator} \${sanitizedValue}\`);
      return builder;
    },

    orderBy(field: keyof T, direction: 'ASC' | 'DESC' = 'ASC'): typeof builder {
      orderClauses.push(\`\${String(field)} \${direction}\`);
      return builder;
    },

    limit(value: number): typeof builder {
      limitValue = value;
      return builder;
    },

    offset(value: number): typeof builder {
      offsetValue = value;
      return builder;
    },

    build(): string {
      let query = \`SELECT \${queryParts.join(', ')} FROM \${table}\`;

      if (whereClauses.length > 0) {
        query += \` WHERE \${whereClauses.join(' AND ')}\`;
      }

      if (orderClauses.length > 0) {
        query += \` ORDER BY \${orderClauses.join(', ')}\`;
      }

      if (limitValue !== null) {
        query += \` LIMIT \${limitValue}\`;
      }

      if (offsetValue !== null) {
        query += \` OFFSET \${offsetValue}\`;
      }

      return query + ';';
    }
  };

  return builder;
};

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

const query = createQueryBuilder<User>('users')
  .select('id', 'name', 'email')
  .where('createdAt', '>', new Date('2023-01-01'))
  .andWhere('email', 'LIKE', '%@example.com')
  .orderBy('name')
  .limit(10)
  .offset(20)
  .build();

console.log(query);`,
  },
  {
    name: "React",
    code: `import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VirtualScrollProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  onEndReached?: () => void;
  endReachedThreshold?: number;
}

export function VirtualScroll<T>({
  items,
  height,
  itemHeight,
  renderItem,
  onEndReached,
  endReachedThreshold = 0.8
}: VirtualScrollProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const lastOnEndReached = useRef(0);

  const totalHeight = items.length * itemHeight;
  const visibleItems = Math.ceil(height / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems + 1, items.length);

  const visibleRange = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const newScrollTop = target.scrollTop;
    setScrollTop(newScrollTop);

    if (onEndReached) {
      const scrollHeight = target.scrollHeight;
      const clientHeight = target.clientHeight;
      const scrolledToEnd = 
        newScrollTop + clientHeight >= scrollHeight * endReachedThreshold;
      
      const now = Date.now();
      const shouldTriggerEndReached = 
        scrolledToEnd && 
        now - lastOnEndReached.current > 1000 &&
        newScrollTop > lastScrollTop.current;

      if (shouldTriggerEndReached) {
        lastOnEndReached.current = now;
        onEndReached();
      }
    }

    lastScrollTop.current = newScrollTop;
  }, [onEndReached, endReachedThreshold]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        if (containerRef.current) {
          containerRef.current.style.height = \`\${height}px\`;
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height, overflow: 'scroll' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <AnimatePresence>
          {visibleRange.map((item, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                transform: \`translateY(\${offsetY + index * itemHeight}px)\`,
                width: '100%',
                height: itemHeight,
              }}
            >
              {renderItem(item, startIndex + index)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}`,
  },
  {
    name: "Node.js",
    code: `import cluster from 'cluster';
import { cpus } from 'os';
import { createServer } from 'http';
import { parse } from 'url';
import { createReadStream } from 'fs';
import { createGzip, createDeflate } from 'zlib';
import { lookup } from 'mime-types';

if (cluster.isPrimary) {
  console.log(\`Primary \${process.pid} is running\`);

  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    console.log('Starting a new worker...');
    cluster.fork();
  });
} else {
  const server = createServer(async (req, res) => {
    try {
      const { pathname } = parse(req.url || '');
      const filePath = pathname === '/' 
        ? './public/index.html' 
        : \`./public\${pathname}\`;

      // Handle compression
      const acceptEncoding = req.headers['accept-encoding'] || '';
      let compressionStream;

      if (acceptEncoding.includes('gzip')) {
        compressionStream = createGzip();
        res.setHeader('Content-Encoding', 'gzip');
      } else if (acceptEncoding.includes('deflate')) {
        compressionStream = createDeflate();
        res.setHeader('Content-Encoding', 'deflate');
      }

      // Set content type
      const mimeType = lookup(filePath) || 'application/octet-stream';
      res.setHeader('Content-Type', mimeType);

      // Set caching headers
      const maxAge = mimeType.startsWith('text/') ? 3600 : 86400;
      res.setHeader('Cache-Control', \`public, max-age=\${maxAge}\`);

      // Stream the file
      const fileStream = createReadStream(filePath);

      fileStream.on('error', (error) => {
        if (error.code === 'ENOENT') {
          res.statusCode = 404;
          res.end('File not found');
        } else {
          res.statusCode = 500;
          res.end('Internal server error');
        }
      });

      if (compressionStream) {
        fileStream
          .pipe(compressionStream)
          .pipe(res);
      } else {
        fileStream.pipe(res);
      }

      // Log the request
      const timestamp = new Date().toISOString();
      const clientIP = req.headers['x-forwarded-for'] || 
        req.socket.remoteAddress;
      console.log(
        \`[\${timestamp}] \${clientIP} - \${req.method} \${pathname}\`
      );
    } catch (error) {
      console.error('Server error:', error);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(
      \`Worker \${process.pid} started, listening on port \${PORT}\`
    );
  });
}`,
  },
];

export const CodeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-[#00205B]/5 to-blue-400/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-[#00205B] font-medium">Code Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00205B] mb-4">
            Explore Our Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek at some example code snippets for our various technology
            specialties
          </p>
        </div>
        <div className="bg-[#282a36] rounded-2xl shadow-xl">
          {/* Window Controls */}
          <div className="flex items-center gap-2 px-4 py-3 rounded-t-2xl bg-[#1e1f29] border-b border-[#282a36]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <motion.div
            className="flex bg-[#1e1f29] overflow-y-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {technologies.map((tech, index) => (
              <motion.button
                key={tech.name}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === index
                    ? "bg-[#282a36] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech.name}
              </motion.button>
            ))}
          </motion.div>
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-sm leading-relaxed font-mono overflow-x-auto"
              >
                <code className="language-typescript">
                  {technologies[activeTab].code.split("\n").map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell pr-4 text-gray-500 select-none w-[2ch]">
                        {i + 1}
                      </span>
                      <span
                        className="table-cell whitespace-pre text-white"
                        dangerouslySetInnerHTML={{
                          __html: line
                            .replace(
                              /\b(const|let|function|interface|type|export|import|from|return|if|for|of|try|catch|async|await)\b/g,
                              (match) =>
                                `<span class="text-[#ff79c6]">${match}</span>`
                            )
                            .replace(
                              /\b(string|number|boolean|Record|Date|null)\b/g,
                              (match) =>
                                `<span class="text-[#8be9fd]">${match}</span>`
                            )
                            .replace(
                              /(['"`])(.*?)\1/g,
                              (match) =>
                                `<span class="text-[#f1fa8c]">${match}</span>`
                            )
                            .replace(
                              /\b(true|false)\b/g,
                              (match) =>
                                `<span class="text-[#bd93f9]">${match}</span>`
                            )
                            .replace(
                              /(\w+)(?=\()/g,
                              (match) =>
                                `<span class="text-[#50fa7b]">${match}</span>`
                            )
                            .replace(
                              /(\w+)(?=:)/g,
                              (match) =>
                                `<span class="text-[#ffb86c]">${match}</span>`
                            ),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
