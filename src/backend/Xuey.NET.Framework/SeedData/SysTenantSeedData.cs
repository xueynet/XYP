using Furion.DatabaseAccessor;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Xuey.NET.Framework
{
    /// <summary>
    /// 租户种子数据
    /// </summary>
    public class SysTenantSeedData : IEntitySeedData<SysTenant, MultiTenantDbContextLocator>
    {
        public IEnumerable<SysTenant> HasData(DbContext dbContext, Type dbContextLocator)
        {
            return new List<SysTenant>
            {
                new SysTenant
                {
                    Id = 142307070918780,
                    Name = "平台开发",
                    Email = "dev@xuey.net",
                    AdminName = "SuperAdmin",
                    Phone = "13823212112",
                    Host = "",
                    Connection = "",
                    CreatedTime = DateTime.Parse("2021-08-01 00:00:00"),
                },
                new SysTenant
                {
                    Id = 142307070918781,
                    Name = "重庆雪印网络科技有限公司",
                    Email = "chenlian@xuey.net",
                    AdminName = "Admin",
                    Phone = "18580521798",
                    Host = "xuey.net",
                    Connection = "",
                    CreatedTime = DateTime.Parse("2021-08-01 00:00:00"),
                }
            };
        }
    }
}