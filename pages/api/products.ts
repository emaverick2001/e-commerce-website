// import "reflect-metadata";
// import { NextApiHandler } from "next";

// import { Product } from "../../entities/Product";
// import getEM from "../../utils/getEM";
// import withORM from "../../utils/getORM";

// const handler: NextApiHandler = async (req, res) => {
//   const em = getEM();
//   const products = await em.find(Product, {});

//   console.log(`context-specific em-ID: ${em.id}`);

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify(products));
// };

// export default withORM(handler);
