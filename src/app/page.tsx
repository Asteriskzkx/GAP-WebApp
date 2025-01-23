// import Image from "next/image";
import Link from 'next/link';
import * as React from 'react';
// import Button from "@mui/material/Button";
// import { Container, Grid, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <main style={{ fontFamily: 'Futura' }}>
      <h1>Hello world!</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
