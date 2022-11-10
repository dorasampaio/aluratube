/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig









// // Client + server code.

// export default function IndexPage(props) {
//   return <div>{props.msg}</div>
// }

// // Server-only code.

// const fs = require('fs')

// export function getStaticProps() {
//   fs
//   return { props: { msg: 'hello world' } }
// }