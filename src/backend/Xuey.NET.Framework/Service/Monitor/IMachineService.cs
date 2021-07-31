using System.Threading.Tasks;

namespace Xuey.NET.Framework.Service
{
    public interface IMachineService
    {
        Task<dynamic> GetMachineBaseInfo();

        Task<dynamic> GetMachineNetWorkInfo();

        Task<dynamic> GetMachineUseInfo();
    }
}