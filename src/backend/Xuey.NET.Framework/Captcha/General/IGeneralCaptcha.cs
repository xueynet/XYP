namespace Xuey.NET.Framework
{
    public interface IGeneralCaptcha
    {
        dynamic CheckCode(GeneralCaptchaInput input);

        dynamic CreateCaptchaImage(int length = 4);
    }
}