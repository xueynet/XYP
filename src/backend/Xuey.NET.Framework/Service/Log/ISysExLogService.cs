using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Xuey.NET.Framework.Service
{
    public interface ISysExLogService
    {
        Task ClearExLog();

        Task<dynamic> QueryExLogPageList([FromQuery] ExLogPageInput input);
    }
}