const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: "mongodb+srv://mern-user:hhhbc2bvg983YlOl@montage.dgaqp.mongodb.net/Montage?retryWrites=true&w=majority",
    serverUrl: process.env.serverUrl || 'http://localhost:3000'
}
    export default config