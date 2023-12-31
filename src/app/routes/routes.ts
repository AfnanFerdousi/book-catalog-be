import express from "express";
import authRoutes from "../modules/auth/auth.route";
import userRoutes from "../modules/user/user.route";
import categoryRoutes from "../modules/category/category.route";
import bookRoutes from "../modules/book/book.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        route: authRoutes,
    },
    {
        path: "/users",
        route: userRoutes,
    },
    {
        path: "/categories",
        route: categoryRoutes,
    },
    {
        path: "/books",
        route: bookRoutes
    }
];

moduleRoutes.forEach(route => {
    router.use(route.path, route.route)    
})

export default router;