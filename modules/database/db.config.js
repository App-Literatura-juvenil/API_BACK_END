const dbconfig = {
    HOST: "durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    USER: "xnxf4xhjhtr5qkfd",
    PASSWORD: "z824vmhyphwg0rw3",
    DB: "ocddezp8qbgityby",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
module.exports = dbconfig;