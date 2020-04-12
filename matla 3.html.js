
<!DOCTYPE html>
<html lang="en">
<head>
    <title>waheebesa</title>
</head>
<body>
    <script>
        //סעיף 1 
        var arr = []
        for (var i = 0; i < 6 ; i++)
        {
            arr.push(prompt('enter a number '+ (i+1))); // הקלטת מספרים מ 1 עד 6 
        }
        // סעיף 2
        console.log('ful array : ' + arr.join (', ')); // הדפסת מערך
        // סעיף 3
        var largest = arr[0];
        var smallest = arr[0];
        for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
        largest = arr[i];
        } else if (arr[i] < smallest) {
        smallest = arr[i];
        }
        console.log(largest);
        console.log(smallest);
        }
        // לגרור את המספר קטן לסוף המערך
       //סעיף 4
       var counter = 0;
       for(; counter < arr.length; ){
            console.log(`Counter is: ${counter}`);
            counter++;                                   // הדפסת כמות לכל מערך 
        };                                                 
        console.log(`After loop: counter is: ${counter}`);
        //סעיף 5
        var num = 0;
        var sum;
        while(num < arr.length)
        {
            if(num % 2 == 0) 
            {
                sum = sum + arr.length;
                console.log("even number",num);
            }
        else
        {
            sum = sum + arr.length;
            console.log("odd number",num); 
        }
        num++;
        }
        //סעיף 6
        var biggest = arr[0];
        var nextbiggest = arr[0];
        for( var i=0; i<arr.length ; i++ )
        {
            if(arr[i]>biggest)
            {
            nextbiggest = biggest;
            biggest = arr[i];
            }
            else if(arr[i]>nextbiggest && arr[i]!=biggest)
            nextbiggest = arr[i];
        }
        console.log(nextbiggest);    //הדפסה למספר שני במערך
        // סעיף 7 
        var matrix = [
            ["true","true"],
            ["true","false"],
            ["false","true"],
            ["false","false"]
        ];
        console.table(matrix);
        // סעיף 8 
        /* 
        למדנו אותם בשפת סי ובשאלה 6 השתמשתי בהם 
        למשל :
        true && true = true
        true && false = false
        false && false = false
        true || true = true
        true || false = true 
        false || false = false
        */
        // דוגמות על הדברים שלמנו בסמסטר א
    </script>
</body>
</html>
