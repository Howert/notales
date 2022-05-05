export class ApiConstants {
    private static readonly hostUrl: String = localStorage.getItem('host') ? ("https://" + localStorage.getItem('host')) : "";
    public static readonly merchantUrl: String = ApiConstants.hostUrl + "/merchant/";
    public static readonly loginUrl: String = ApiConstants.hostUrl + "/merchant-login";

    
}
