import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const wallet = new PublicKey("EUpX3WNe7Uv3YP1nya2h2bBo6sRJCMVdDcsFhLc6fESQ");
const programId = new PublicKey("11111111111111111111111111111111");

const [vaultPda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault"), wallet.toBuffer()],
  programId
);

const balanceLamports = await connection.getBalance(wallet);
console.log("Devnet SOL:", balanceLamports / 1e9);
console.log("Vault PDA:", vaultPda.toBase58(), "Bump:", bump);
