using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Xuey.NET.Framework.Service
{
    public interface ISysOpLogService
    {
        Task ClearOpLog();

        Task<dynamic> QueryOpLogPageList([FromQuery] OpLogPageInput input);
    }
}