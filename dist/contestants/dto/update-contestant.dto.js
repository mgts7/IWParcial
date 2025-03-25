"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContestantDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contestant_dto_1 = require("./create-contestant.dto");
class UpdateContestantDto extends (0, mapped_types_1.PartialType)(create_contestant_dto_1.CreateContestantDto) {
}
exports.UpdateContestantDto = UpdateContestantDto;
//# sourceMappingURL=update-contestant.dto.js.map