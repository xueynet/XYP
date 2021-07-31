using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Xuey.NET.Framework.Service
{
    public interface ISysVisLogService
    {
        Task ClearVisLog();

        Task<dynamic> QueryVisLogPageList([FromQuery] VisLogPageInput input);
    }
}