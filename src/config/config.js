// 是否使用本地API接口
export const localAPI = false;
// 是否使用线上API接口
export const publicAPI = false;
// 服务域名地址 weboa / xinsteel

export const ctx = 'xinsteel.ytg';

// ajax域名地址
const domain = 'http://localhost:8901';
const domain2 = 'http://localhost:8901';
const domain0 = 'http://localhost:8901';
const domainFile = 'http://localhost:8901';

// ajax default
export const ajaxCtx = domain + '/xinsteel.maketx/service';
// ajax url starts with S2/...x   /XG/service /  /xinsteel.makets/service
export const ajaxCtx2 = domain2 + '/xinsteel.maketx/service';
// ajax url starts with S0/...
export const ajaxCtx0 = domain0; //
// 文件上传地址
// icore-file-svr/fdfs/file/upload.do / icore-file-svr-test/fdfs/file/upload.do
export const fileUploadUrl = domainFile + 'icore-file-svr-test/fdfs/file/upload.do';
// 文件下载地址
// icore-file-svr/fdfs/file/download.do / icore-file-svr-test/fdfs/file/download.do
export const fileDownloadUrl = domainFile + 'icore-file-svr-test/fdfs/file/download.do';
// 图片所在域名地址
export const imgBaseUrl = domainFile + '';
// 文件所在域名地址
export const fileBaseUrl = domainFile + '';
// cookie名
export const cookieUserId = 'xinsteel.ytg_Authorization';

export const cookieUserName = 'xinsteel.ytg_userName';
// cookie默认有效时间（小时）
export const cookieTime = 24;
