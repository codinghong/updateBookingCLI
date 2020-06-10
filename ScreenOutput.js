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
    multipleChar(
      table_padding_char, 
      remainingPadding( 
        table_padding, 
        element.length, 
        getTableWidth(dataArr)
      ),
    ) +
    v_border_char
  ));

  outputHorizontalBorder( getTableWidth(dataArr) );
}
// This function calculates how many spaces requires after a name to fill up the table until the righthand side border
function remainingPadding(final_padding, element_length, table_width) {
	// Table padding is a default value, do not change it
	return ( (table_width - element_length) + final_padding);
}
// Use longest string in table as width
// 1. Need function for width of table
// 2. Width of table must always be more than or same as longest piece of content
// 3. Each line contains only 1 string there for longest string = table width 
function getTableWidth(dataArr) {
// Sort the array, positions longest string at zero
  dataArr.sort(sortByLength);
  //Q. do we need parantheses? Add to notes
// returns the length of that string
  return dataArr[0].length;
}

/*
 * @param int width Number of characters used in the horizontal border, not taking into account padding and vertical border
 */
function outputHorizontalBorder(width = 50) {
  
  let padded_width = width + (v_border_char.length * 2) + (table_padding * 2);
  
  out( multipleChar( h_border_char, padded_width ));
}