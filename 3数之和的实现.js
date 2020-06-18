var threeSum = function(nums) {
    var arr = [];
    nums.sort((a,b)=> a-b);
    for (var i=0; i<nums.length; i++) {
        var left = i+1;
        var right = nums.length -1;
        while(left < right) {
            if (-nums[i] == (nums[left] + nums[right])) {
                var newarr = arr.filter(item => {
                    return item[0] === nums[i] && item[1] === nums[left] && item[2] === nums[right];
                })
                if (newarr.length === 0) {
                    arr.push([nums[i], nums[left], nums[right]])
                } 
                left++;
            } else if (-nums[i] < (nums[left] + nums[right])) {
                right--;
            } else {
                left++;
            }
        }
    }
    return arr;
};