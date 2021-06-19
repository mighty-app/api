import { Body, Controller, Post, Route, Tags } from "tsoa";
import { CreateMightyTokenInput } from "../entities/inputs";
import RealMightyTokenService from "../services/MightyTokenService";

@Route("mighty-tokens")
@Tags("Mighty Token")
export class MightyTokenController extends Controller {
  /** Create Mighty token */
  @Post()
  async createMightyToken(@Body() {name, type, userId}: CreateMightyTokenInput): Promise<string | null> {
    return new RealMightyTokenService().createMightyToken(name, type, userId)
  }
}
