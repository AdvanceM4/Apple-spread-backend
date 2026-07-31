const http = require("http");

const delivery = {
    trackingNumber: "ASD-2026-001",
    status: "In Transit",
    location: "Lagos Distribution Center",
    estimatedDelivery: "August 5, 2026"
};

const server = http.createServer((request, response) => {

    response.setHeader(
        "Access-Control-Allow-Origin",
        "*"
    );

    response.setHeader(
        "Content-Type",
        "application/json"
    );

    response.end(
        JSON.stringify(delivery)
    );

});

server.listen(
    process.env.PORT || 3000,
    () => {

        console.log(
            "Apple Spread Delivery backend is running!"
        );

    }
);
