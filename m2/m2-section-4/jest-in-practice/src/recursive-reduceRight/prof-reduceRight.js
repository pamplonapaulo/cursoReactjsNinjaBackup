'use strict'

import mainReduce from './prof-main-reduce'
import reverse from '../recursive-reverse/reverse-recursive-prof'

const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)

//console.log(mainReduce);
//console.log(reduceRight(["do", "nan", "Fer"], (acc, item) => acc + item, ""))

export default reduceRight