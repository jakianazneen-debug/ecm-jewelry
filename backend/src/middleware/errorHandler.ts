import { Request, Response, NextFunction } from 'express';

// Error handler middleware
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message,
    });
};

// To use this middleware, add it to your Express app after all other middleware and routes:
// app.use(errorHandler);
