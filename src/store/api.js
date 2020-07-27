/* eslint-disable no-param-reassign */
import axios from "axios";
import config from "@/config";

/**
 * Class API
 */

class API {
  /*
   * $options
   * method - Request Method
   * params - Параметры запроса
   * isApi - это будет обращение к API?
   * data - Form Fields
   * header - Заголовки
   */
  static fetchAction(cmd, options = {}) {
    // По умолчанию обращаемся к API
    let url = `/api/${cmd}/`;
    // ... но можем и к кастомному URL
    if (typeof options.isApi !== "undefined" && options.isApi === false) {
      url = `${cmd}/`;
    }

    // Заголовки
    const headers = { "Cache-Control": "max-age=300" };
    if (
      typeof options.headers !== "undefined" &&
      Object.keys(options.headers).length > 0
    ) {
      lodashForEach(options.headers, function setHeader(val, key) {
        headers[key] = val;
      });
    }

    // console.log("API options: ", options);
    return axios({
      method: options.method ? options.method : "GET",
      url,
      params: options.params ? options.params : null,
      headers,
      data: options.data ? options.data : null,
    })
      .catch((error) => {
        return error;
      })
      .then((response) => {
        console.log("API Response: ", response);

        // 404
        if (response && response.response && response.response.status === 404) {
          return response.response.data.result;
        }

        if (!response.data) throw new Error(" No data in response object");

        if (response.data.error) {
          // API standard error
          console.warn("API error: ", response.data.error);
          throw response.data.error;
        }

        if (!response.data || !response.data.result)
          throw new Error("No result in response data object");

        return response.data.result;
      });
  }
}

export default API;
