"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSortByStep = void 0;
class BubbleSortByStep {
    static bubbleSortByStep(list) {
        let needNextPass = true;
        for (let k = 1; k < list.length && needNextPass; k++) {
            needNextPass = false;
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    /* Swap list[i] with list[i + 1] */
                    console.log("Swap " + list[i] + " with " + list[i + 1]);
                    let temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true; /* Next pass still needed */
                }
            }
            /* Array may be sorted and next pass not needed */
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
            /* Show the list after sort */
            console.log("List after the  " + k + "' sort: ");
            for (let j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
            console.log();
        }
    }
}
exports.BubbleSortByStep = BubbleSortByStep;
BubbleSortByStep.numbers = [8, 3, 6, 1, 4, 10, 2, 50];
