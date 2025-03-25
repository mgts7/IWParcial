"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDictatorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dictator_dto_1 = require("./create-dictator.dto");
class UpdateDictatorDto extends (0, mapped_types_1.PartialType)(create_dictator_dto_1.CreateDictatorDto) {
}
exports.UpdateDictatorDto = UpdateDictatorDto;
//# sourceMappingURL=update-dictator.dto.js.map