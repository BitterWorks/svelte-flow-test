import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { filterObj } from "../../utils/Index";
import type { FruitInput } from "../../graphql/generated/graphql";
import type { TestParameter } from "../../types/components";

test('filterObj', () => {
    // Arrange
    const params: TestParameter<FruitInput[], {}>[] = [
        [[
            {
                "name": "Frutilla",
                "color": "Rojo",
                "amount": 1
            },
            {
                "name": "Manzana",
                "color": "Rojo",
                "amount": 1
            }
        ], {
            "name": "Manzana"
        }],
        [[
            {
                "name": "Frutilla",
                "color": "Rojo",
                "amount": 1
            },
            {
                "name": "Frutilla",
                "color": "Rojo",
                "amount": 3
            }
        ], {
            "amount": 3
        }],
        [[
            {
                "name": "Pomelo",
                "color": "Amarillo",
                "amount": 5
            },
            {
                "name": "Frutilla",
                "color": "Rojo",
                "amount": 3
            }
        ], {
            "name": "Frutilla",
            "color": "Rojo",
            "amount": 3
        }],
    ];

    // Act and Assert
    for (let param of params) {
        assert.equal(filterObj(param[0][0],param[0][1]), param[1])
    };
});

test.run();