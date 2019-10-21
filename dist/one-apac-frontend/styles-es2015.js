(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n}\n\n.content {\n  width: 600px;\n}\n\n.oswald {\n  font-family: \"Oswald\", sans-serif;\n  line-height: 1;\n}\n\n.roboto {\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  background-color: transparent;\n  border: none;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n.button {\n  height: 32px;\n  padding: 4px;\n  border: 1px solid black;\n  border-radius: 12px;\n}\n\n.button:hover {\n  background-color: lightblue;\n}\n\na {\n  color: inherit;\n  /* blue colors for links too */\n  text-decoration: inherit;\n  /* no underline */\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-text {\n  height: 32px;\n  width: 100%;\n  border: none;\n  border-radius: 12px;\n  background: lightgrey;\n  font-size: 16px;\n  text-align: center;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.input-text:focus {\n  outline: none;\n  background-color: transparent;\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  transition: background-color 0.3s;\n  transition: border-radius 0.3s;\n  transition: border-bottom 0.5s;\n}\n\n.input-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: inline-block;\n  width: 62px;\n  height: 32px;\n  position: relative;\n  border-radius: 50px;\n  overflow: hidden;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background-color: #707070;\n  transition: background-color ease 0.3s;\n}\n\n.input-toggle::before {\n  content: \"On Off\";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  width: 28px;\n  height: 28px;\n  background: #fff;\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  font: 10px/28px Helvetica;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-indent: -22px;\n  word-spacing: 37px;\n  color: #fff;\n  text-shadow: -1px -1px rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;\n}\n\n.input-toggle:checked {\n  background-color: #4CD964;\n}\n\n.input-toggle:checked:before {\n  left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXEtpIEp1bmcgS2ltXFxEZXNrdG9wXFxQcm9qZWN0c1xcb25lLWFwYWMtZnJvbnRlbmQvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHNCQUFBO0FDQUY7O0FER0E7OztFQUdFLG1CQUFBO0VBRUEsU0FBQTtFQUNBLFVBQUE7QUNERjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUNIRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURRQTtFQUNFLGlDQUFBO0VBRUEsY0FBQTtBQ05GOztBRFNBO0VBQ0UsaUNBQUE7QUNORjs7QURVQTtFQUNFLDZCQUFBO0VBRUEsWUFBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtBQ1ZGOztBRGNBO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FDYkY7O0FEZUU7RUFDRSwyQkFBQTtBQ2JKOztBRGtCQTtFQUNFLGNBQUE7RUFBZ0IsOEJBQUE7RUFDaEIsd0JBQUE7RUFBMEIsaUJBQUE7RUFDMUIsNkNBQUE7QUNiRjs7QURpQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNkRjs7QURpQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FDbEJGOztBRG9CRTtFQUNFLGFBQUE7RUFFQSw2QkFBQTtFQUVBLGdCQUFBO0VBQ0EsMkNBQUE7RUFFQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUNyQko7O0FEeUJBO0VBQ0Usd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0VBRUEscUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUVBLHlCQUFBO0VBQ0Esc0NBQUE7QUM3QkY7O0FEK0JFO0VBQ0UsaUJBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0FDOUJKOztBRGlDRTtFQUNFLHlCQUFBO0FDL0JKOztBRGtDRTtFQUNFLFVBQUE7QUNoQ0oiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVzZXQgYm94LXNpemluZywgcGFkZGluZywgYW5kIG1hcmdpblxyXG5odG1sIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG5cclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gYmFzaWMgcGFnZSBsYXlvdXRcclxuLnBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxufVxyXG5cclxuLy8gY29udGVudCBvZiBwYWdlIGxheW91dFxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4vLyBmb250c1xyXG4ub3N3YWxkIHtcclxuICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAxOyAvLyBPc3dhbGQgZm9udCBjb21lcyB3aXRoIGEgaGlnaCBsaW5lLWhlaWdodFxyXG59XHJcblxyXG4ucm9ib3RvIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIHJlc2V0IGJ1dHRvbiBzdHlsZXNcclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICBmb250OiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIHJlc3R5bGUgYnV0dG9uc1xyXG4uYnV0dG9uIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gIHBhZGRpbmc6IDRweDtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByZXNldCBhbmNob3IgdGFnIHN0eWxlc1xyXG5hIHtcclxuICBjb2xvcjogaW5oZXJpdDsgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xyXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogbm8gdW5kZXJsaW5lICovXHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG59XHJcblxyXG4vLyBmb3JtIGFuZCBpbnB1dFxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dCB7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjVzO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LXRvZ2dsZSB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICB3aWR0aDogNjJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZSAwLjNzO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJPbiBPZmZcIjtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBsZWZ0OiAycHg7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQ6IDEwcHgvMjhweCBIZWx2ZXRpY2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWluZGVudDogLTIycHg7XHJcbiAgICB3b3JkLXNwYWNpbmc6IDM3cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllcigwLjMsIDEuNSwgMC43LCAxKSAwLjNzO1xyXG4gIH1cclxuXHJcbiAgJjpjaGVja2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XHJcbiAgfVxyXG5cclxuICAmOmNoZWNrZWQ6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgfVxyXG59IiwiaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5vc3dhbGQge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5yb2JvdG8ge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogYmx1ZSBjb2xvcnMgZm9yIGxpbmtzIHRvbyAqL1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIC8qIG5vIHVuZGVybGluZSAqL1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmlucHV0LXRleHQge1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLmlucHV0LXRleHQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBib3JkZXItcmFkaXVzIDAuM3M7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC41cztcbn1cblxuLmlucHV0LXRvZ2dsZSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIDAuM3M7XG59XG4uaW5wdXQtdG9nZ2xlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIk9uIE9mZlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBsZWZ0OiAycHg7XG4gIHRvcDogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQ6IDEwcHgvMjhweCBIZWx2ZXRpY2E7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWluZGVudDogLTIycHg7XG4gIHdvcmQtc3BhY2luZzogMzdweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllcigwLjMsIDEuNSwgMC43LCAxKSAwLjNzO1xufVxuLmlucHV0LXRvZ2dsZTpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDRDk2NDtcbn1cbi5pbnB1dC10b2dnbGU6Y2hlY2tlZDpiZWZvcmUge1xuICBsZWZ0OiAzMnB4O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ki Jung Kim\Desktop\Projects\one-apac-frontend\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map