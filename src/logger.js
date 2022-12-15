"use strict";
import { createLogger, format, transports, addColors, label } from "winston";

export default createLogger({
  level: "debug",
  format: format.combine(
    format.label({ label: "right meow!" }),
    format.colorize(),
    format.simple(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(
      (info) =>
        `${info.timestamp} [${info.level}] : ${info.message} ${info.label}`
    )
  ),
  transports: [new transports.Console()]
});
