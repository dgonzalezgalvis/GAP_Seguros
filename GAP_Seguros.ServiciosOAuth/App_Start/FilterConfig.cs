﻿using System.Web;
using System.Web.Mvc;

namespace GAP_Seguros.ServiciosOAuth
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
