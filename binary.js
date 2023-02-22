//
function binary(arr,target){
    let start=0;
    let end=arr.length-1;
    let n=arr[0]
    while(start<end){
        let mid=Math.floor((start+end)/2)
        console.log('mid',mid)
        // if(target===arr[mid] || target>arr[mid]) {
        //     console.log('before start',start)
        //     start=mid+1
        //     console.log('after start',start)
        // }
        // else {
        //     n=arr[mid]
        //     console.log('before end',end)
        //     end=mid-1 
        //     console.log('after end',end)
        // }
            
        if(target===arr[mid]) return arr[mid+1]
        else if(target>arr[mid]) start=mid+1
        else end=mid-1
    }
    return arr[start]
}
console.log(binary([-1,2,3,5,6,10,12],-1))