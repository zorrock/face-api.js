import * as tf from '@tensorflow/tfjs-core';
import { convLayer } from '../commons/convLayer';
export function boxPredictionLayer(x, params) {
    return tf.tidy(function () {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = tf.reshape(convLayer(x, params.box_encoding_predictor_params), [batchSize, -1, 1, 4]);
        var classPrediction = tf.reshape(convLayer(x, params.class_predictor_params), [batchSize, -1, 3]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
}
//# sourceMappingURL=boxPredictionLayer.js.map