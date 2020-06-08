/* Depends on a monospace font, otherwise dimensions will not work
 *  
 * @param array dataArr Holds data from file
 * 
 */
function tabular(dataArr) {

  //1. What's the width of the table? Longest string Or fixed size.

  //2. How many rows? Do ForEach

  //how many rows?
  //foreach...
 
  outputHorizontalBorder(getTableWidth( dataArr ));

  dataArr.forEach(element => out( 
    v_border_char +
    multipleChar(table_padding_char, table_padding) +
    element +
    multipleChar(table_padding_char, remainingPadding( table_padding, element.length, getTableWidth(dataArr)),
    ) +
    v_border_char
  ));

  outputHorizontalBorder( getTableWidth(dataArr) );
}

function remainingPadding(default_padding, element_length, table_width) {
	
	return ( (table_width - element_length) + default_padding);
}

function getTableWidth(dataArr) {

  dataArr.sort(sortByLength);
  //Q. do we need parantheses? Add to notes

  return dataArr[0].length;
}

/*
 * @param int width Number of characters used in the horizontal border, not taking into account padding and vertical border
 */
function outputHorizontalBorder(width = 50) {
  
  let padded_width = width + (v_border_char.length * 2) + (table_padding * 2);
  
  out( multipleChar( h_border_char, padded_width ));
}