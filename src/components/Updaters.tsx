import React, { Fragment } from "react";
import MulticallUpdater from "../state/multicall/updater";
import ListUpdater from "../state/lists/updater";

export function Updaters() {
  return (
    <Fragment>
      <ListUpdater />
      <MulticallUpdater />
    </Fragment>
  );
}
