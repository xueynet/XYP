using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Xuey.NET.Framework.Service
{
    public interface IAuthService
    {
        Task<dynamic> GetCaptcha();

        Task<bool> GetCaptchaOpen();

        Task<LoginOutput> GetLoginUserAsync();

        string LoginAsync([FromBody] LoginInput input);

        Task LogoutAsync();

        Task<dynamic> VerificationCode(ClickWordCaptchaInput input);
    }
}