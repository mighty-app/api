
import { Body, Controller, Get, Path, Post, Route, Tags } from "tsoa";
import Program from "../models/Program";
import RealProgramService from "../services/ProgramService";

@Route("programs")
@Tags("Program")
export class ProgramController extends Controller {
  /** Create program */
  @Post()
  async createProgram(@Body() {name}: {name: string}): Promise<Program | null> {
    return await new RealProgramService().createProgram(name)
  }

  /** Get program by ID */
  @Get("{programId}")
  async getProgram(@Path() programId: string): Promise<Program | null> {
    return await new RealProgramService().getProgram(programId)
  }
}
