using Microsoft.EntityFrameworkCore;
using Xuey.NET.Framework;

namespace Xuey.NET.Core.Entity
{
    /// <summary>
    /// 车辆信息（测试通用增删查改）
    /// </summary>
    [Comment("车辆信息")]
    public class Car : DEntityBase
    {
        public string CarName { get; set; }
        public string CarNo { get; set; }
    }
}