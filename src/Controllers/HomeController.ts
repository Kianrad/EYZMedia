import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
import { MediaService } from "../Services/MediaService";

@Controller("api")
export class HomeController {
  private mediaService = new MediaService();

  @Get("list")
  private async list(req: Request, res: Response) {
    await this.mediaService
      .save()
      .then(data => {
        res.status(200).json({
          result: data
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }

  @Get("identify")
  private async identify(req: Request, res: Response) {
    await this.mediaService
      .identifyValues()
      .then(data => {
        res.status(200).json({
          result: data
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }

  @Get("update")
  private async update(req: Request, res: Response) {
    await this.mediaService
      .update()
      .then(count => {
        res.status(200).json({
          message: count + " row(s) updated!"
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }

  @Get("delete")
  private async delete(req: Request, res: Response) {
    await this.mediaService
      .deleteAll()
      .then(count => {
        res.status(200).json({
          message: count + " row(s) deleted!"
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }
}
