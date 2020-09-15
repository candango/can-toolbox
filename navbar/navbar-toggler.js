/**
 * Copyright 2018-2020 Flavio Garcia
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { default as FazItem } from "../item";
import navbarTogglerTemplate from "./stache/navbar-toggler.stache";

/**
 *
 * @constructor
 * @param {Object} event. An object representing a nav item.
 * @param {string} event.value
 */
class FazNavbarToggler extends FazItem {

    static get props() {
        return $.extend(super.props, {
            target: {type: String, default: ""},
            label: {type: String, default: ""},
            value: String
        });
    }

    get html() {
        let view = navbarTogglerTemplate;
        return view(this);
    }

    get dataTarget() {
        return "#" + this.target;
    }

    process(element) {
        for(let attribute of element.attributes) {
            switch (attribute.name.toLowerCase()) {
                case "id":
                    this.id = attribute.value;
                    break;
                case "href":
                    this.href = attribute.value;
                    break;
                case "label":
                    this.label = attribute.value;
                    break;
                case "target":
                    this.target = attribute.value;
                    break;
            }
        }
        this.content = element.innerHTML;
        this.element = element;
    }

    processData(data) {
        this.content = data.value;
        if(data.id !== undefined) {
            this.id = data.id;
        }
        if(data.href !== undefined) {
            this.href = data.href;
        }
        if(data.label !== undefined) {
            this.label = data.label;
        }
        if(data.target !== undefined) {
            this.target = data.target;
        }
        if(data.value !== undefined) {
            this.content = data.value;
        }
    }
}

export default FazNavbarToggler;
