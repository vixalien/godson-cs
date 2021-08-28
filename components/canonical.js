let origin = () => {
	// let origin;
	// if (process.env.VERCEL) {
	// 	origin = "https://" + process.env.VERCEL_URL
	// } else {
	// 	origin = process.env.URL
	// }
	return "https://godsonjoint.com"
	return process.env.URL
}

let Canonical = ({ path }) => {
	return <link rel="canonical" href={origin()+path}/>
}

export default Canonical;
export { origin };