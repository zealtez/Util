/*cutting long valueText by maxValue*/
"labelFunction": function(valueText) {
                     if (valueText.length > 25)
                         return valueText.substring(0, 25) + '...';
                     else
                         return valueText;
                 }
