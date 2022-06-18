function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    const m = nums1.length;
    const n = nums2.length;
    
    var lo = 0;
    var hi = m;
    
    while (lo <= hi) {
        var breakNum1 = Math.floor((lo + hi) / 2);
        var breakNum2 = Math.floor((m + n + 1) / 2) - breakNum1;
        
        var mxLN1 = breakNum1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[breakNum1 - 1];
        var miRN1 = breakNum1 == m ? Number.MAX_SAFE_INTEGER : nums1[breakNum1];
        var mxLN2 = breakNum2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[breakNum2 - 1];
        var miRN2 = breakNum2 == n ? Number.MAX_SAFE_INTEGER : nums2[breakNum2];
        
        if (mxLN1 > miRN2) {
            hi = breakNum1 - 1;
        } else if (mxLN1 <= miRN2 && mxLN2 <= miRN1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(mxLN1, mxLN2) + Math.min(miRN1, miRN2)) / 2.0;
            } else {
                return Math.max(mxLN1, mxLN2);
            }       
        } else {
            lo = breakNum1 + 1;
        }
    }
};