﻿using Furion.DatabaseAccessor;
using Furion.DependencyInjection;
using Furion.DynamicApiController;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Xuey.NET.Application.Dto;
using Xuey.NET.Core.Entity;
using Xuey.NET.Framework.Service;

namespace Xuey.NET.Application
{

    [Route("api/[controller]")]
    [ApiDescriptionSettings("企业业务服务", GroupName = "Biz", Name = "Car", Order = 90)]
    public class CarService : BaseService<Car, CarSeaarch, CarAdd, CarUpdate, CarImport, CarDetail, CarPageList, CarExport, CarPrint>, IDynamicApiController, ITransient
    {
        public CarService(IRepository<Car> repository) : base(repository)
        {
            // 动作可以写在构造函数中
            BeforeAddAction = add =>
            {

            };
        }

        /// <summary>
        /// 新增
        /// </summary>
        /// <param name="addDto"></param>
        /// <returns></returns>
        public override Task Add(CarAdd addDto)
        {
            // 动作也可以写在方法重写中
            AfterAddAction = a =>
            {

            };
            return base.Add(addDto);
        }

        /// <summary>
        /// 继承通用类之后默认会生成API
        /// 无用或者不想暴露的通用方法可以重写后打上[NonAction]特性
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [NonAction]
        public override Task<CarPrint> Print(long id)
        {
            return base.Print(id);
        }
    }
}