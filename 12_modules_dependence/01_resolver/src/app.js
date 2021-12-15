import _ from "lodash";
import header from "@/components/header";

const math = require("@/math");
console.log(math.add(5, 6));
console.log(_.join(["ha", "ha"], "  "));
console.log(header());
