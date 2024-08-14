import React, { useContext, useMemo } from "react";
import { createUseStyles } from "react-jss";
import { SaladContext } from "../SaladMaker/SaladMaker";

const LIST_ITEM_WIDTH = 100;

const useStyles = createUseStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: 50,
    "& li": {
      width: LIST_ITEM_WIDTH,
    },
  },
  wrapper: {
    borderTop: "black solid 1px",
    display: "flex",
    padding: 25,
  },
});

export default function SaladSummary() {
  const classes = useStyles();
  const { salad } = useContext(SaladContext);

  const saladList = SaladList( salad );

  if (!salad.length) {
    return (
      <div className={classes.wrapper}>
        <h2>Your Salad</h2>
        <p>No ingredients selected yet.</p>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {saladList}
      </ul>
    </div>
  );
}
function SaladList ( salad ) {
    return useMemo(
        () => salad.map( ( { name, id } ) => (
            <li key={ id }>
                { name }
            </li>
        ) ),
        [ salad ]
    );
}

