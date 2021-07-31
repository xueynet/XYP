using Furion.DependencyInjection;

namespace Xuey.NET.Application
{
    public class SystemService : ISystemService, ITransient
    {
        public string GetDescription()
        {
            return "让 .NET 开发更简单，更通用，更流行。";
        }
    }
}