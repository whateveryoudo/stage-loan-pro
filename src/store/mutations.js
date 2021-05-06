/*
 * @Author: ykx
 * @Date: 2021-04-28 09:46:16
 * @LastEditTime: 2021-05-06 15:07:10
 * @LastEditors: your name
 * @Description: mutation修改state
 * @FilePath: \stage-load-pro\src\store\mutations.js
 */
import { UPDATE_PROGRESS, SAVE_PROGRESS } from "./types";
export default {
  [SAVE_PROGRESS](state, { stepIndex }) {
    let progressSteps = Object.assign(state.progressSteps);
    if (progressSteps.length < 0 || stepIndex == undefined) {
      return;
    }
    progressSteps[stepIndex - 1].isComplete = true;
    state.progressSteps = progressSteps;
  },
  [UPDATE_PROGRESS](state, { stepIndex }) {
    // 先重置所有状态
    let tempSteps = state.progressSteps.map(item => {
        return {...item, waiting: false, isComplete: false}
    })
    tempSteps.forEach((item, index) => {
      index <= stepIndex && (item.waiting = true);
      if (stepIndex > 0 && index < stepIndex && item) {
        // 此项之前的更新进度
        item.isComplete = true;
      }
    });
    state.progressSteps = tempSteps;
  },
};
