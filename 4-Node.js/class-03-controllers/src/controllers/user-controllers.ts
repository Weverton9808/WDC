import { Request, Response } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { name, series } = req.body;
    console.log({ name, series });
    return res.status(201).json({ message: "user created" });
  },
  read(req: Request, res: Response) {
    const { id } = req.params;
    // query for user = query for user id
    // return res.response/id
    return res.status(200).json({ message: `user ${id} read` });
  },

  update(req: Request, res: Response) {
    const { name, series } = req.body;
    const { id } = req.params;

    console.log({ id,name, series });

    return res.status(200).json({ message: "user update" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    return res.status(200).json({ message: `user ${id} deleted` });
  },

};
