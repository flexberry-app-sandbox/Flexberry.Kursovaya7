﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Покупка.
    /// </summary>
    // *** Start programmer edit section *** (Покупка CustomAttributes)

    // *** End programmer edit section *** (Покупка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПокупкаE", new string[] {
            "Сумма as \'Сумма\'",
            "Количество as \'Количество\'",
            "БазаКлиента as \'БазаКлиента\'",
            "БазаКлиента.Логин as \'Логин\'",
            "Остаток as \'Остаток\'",
            "Остаток.Колво as \'Колво\'",
            "ЦенноваяСтела as \'ЦенноваяСтела\'",
            "ЦенноваяСтела.Наименование as \'Наименование\'",
            "ЦенноваяСтела.Цена as \'Цена\'"})]
    [View("ПокупкаL", new string[] {
            "Сумма as \'Сумма\'",
            "Количество as \'Количество\'",
            "БазаКлиента.Логин as \'Логин\'",
            "Остаток.Колво as \'Колво\'",
            "ЦенноваяСтела.Наименование as \'Наименование\'",
            "ЦенноваяСтела.Цена as \'Цена\'"})]
    public class Покупка : ICSSoft.STORMNET.DataObject
    {
        
        private double fКоличество;
        
        private double fСумма;
        
        private IIS.Kursovaya7.Остаток fОстаток;
        
        private IIS.Kursovaya7.БазаКлиента fБазаКлиента;
        
        private IIS.Kursovaya7.ЦенноваяСтела fЦенноваяСтела;
        
        private IIS.Kursovaya7.Автоматизация fАвтоматизация;
        
        // *** Start programmer edit section *** (Покупка CustomMembers)

        // *** End programmer edit section *** (Покупка CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.Количество CustomAttributes)

        // *** End programmer edit section *** (Покупка.Количество CustomAttributes)
        public virtual double Количество
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.Количество Get start)

                // *** End programmer edit section *** (Покупка.Количество Get start)
                double result = this.fКоличество;
                // *** Start programmer edit section *** (Покупка.Количество Get end)

                // *** End programmer edit section *** (Покупка.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.Количество Set start)

                // *** End programmer edit section *** (Покупка.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (Покупка.Количество Set end)

                // *** End programmer edit section *** (Покупка.Количество Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.Сумма CustomAttributes)

        // *** End programmer edit section *** (Покупка.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.Сумма Get start)

                // *** End programmer edit section *** (Покупка.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Покупка.Сумма Get end)

                // *** End programmer edit section *** (Покупка.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.Сумма Set start)

                // *** End programmer edit section *** (Покупка.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Покупка.Сумма Set end)

                // *** End programmer edit section *** (Покупка.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Покупка.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.БазаКлиента CustomAttributes)

        // *** End programmer edit section *** (Покупка.БазаКлиента CustomAttributes)
        [PropertyStorage(new string[] {
                "БазаКлиента"})]
        [NotNull()]
        public virtual IIS.Kursovaya7.БазаКлиента БазаКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.БазаКлиента Get start)

                // *** End programmer edit section *** (Покупка.БазаКлиента Get start)
                IIS.Kursovaya7.БазаКлиента result = this.fБазаКлиента;
                // *** Start programmer edit section *** (Покупка.БазаКлиента Get end)

                // *** End programmer edit section *** (Покупка.БазаКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.БазаКлиента Set start)

                // *** End programmer edit section *** (Покупка.БазаКлиента Set start)
                this.fБазаКлиента = value;
                // *** Start programmer edit section *** (Покупка.БазаКлиента Set end)

                // *** End programmer edit section *** (Покупка.БазаКлиента Set end)
            }
        }
        
        /// <summary>
        /// Покупка.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.Остаток CustomAttributes)

        // *** End programmer edit section *** (Покупка.Остаток CustomAttributes)
        [PropertyStorage(new string[] {
                "Остаток"})]
        [NotNull()]
        public virtual IIS.Kursovaya7.Остаток Остаток
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.Остаток Get start)

                // *** End programmer edit section *** (Покупка.Остаток Get start)
                IIS.Kursovaya7.Остаток result = this.fОстаток;
                // *** Start programmer edit section *** (Покупка.Остаток Get end)

                // *** End programmer edit section *** (Покупка.Остаток Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.Остаток Set start)

                // *** End programmer edit section *** (Покупка.Остаток Set start)
                this.fОстаток = value;
                // *** Start programmer edit section *** (Покупка.Остаток Set end)

                // *** End programmer edit section *** (Покупка.Остаток Set end)
            }
        }
        
        /// <summary>
        /// Покупка.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.ЦенноваяСтела CustomAttributes)

        // *** End programmer edit section *** (Покупка.ЦенноваяСтела CustomAttributes)
        [PropertyStorage(new string[] {
                "ЦенноваяСтела"})]
        [NotNull()]
        public virtual IIS.Kursovaya7.ЦенноваяСтела ЦенноваяСтела
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.ЦенноваяСтела Get start)

                // *** End programmer edit section *** (Покупка.ЦенноваяСтела Get start)
                IIS.Kursovaya7.ЦенноваяСтела result = this.fЦенноваяСтела;
                // *** Start programmer edit section *** (Покупка.ЦенноваяСтела Get end)

                // *** End programmer edit section *** (Покупка.ЦенноваяСтела Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.ЦенноваяСтела Set start)

                // *** End programmer edit section *** (Покупка.ЦенноваяСтела Set start)
                this.fЦенноваяСтела = value;
                // *** Start programmer edit section *** (Покупка.ЦенноваяСтела Set end)

                // *** End programmer edit section *** (Покупка.ЦенноваяСтела Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya7.Автоматизация.
        /// </summary>
        // *** Start programmer edit section *** (Покупка.Автоматизация CustomAttributes)

        // *** End programmer edit section *** (Покупка.Автоматизация CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Автоматизация"})]
        public virtual IIS.Kursovaya7.Автоматизация Автоматизация
        {
            get
            {
                // *** Start programmer edit section *** (Покупка.Автоматизация Get start)

                // *** End programmer edit section *** (Покупка.Автоматизация Get start)
                IIS.Kursovaya7.Автоматизация result = this.fАвтоматизация;
                // *** Start programmer edit section *** (Покупка.Автоматизация Get end)

                // *** End programmer edit section *** (Покупка.Автоматизация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Покупка.Автоматизация Set start)

                // *** End programmer edit section *** (Покупка.Автоматизация Set start)
                this.fАвтоматизация = value;
                // *** Start programmer edit section *** (Покупка.Автоматизация Set end)

                // *** End programmer edit section *** (Покупка.Автоматизация Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПокупкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПокупкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПокупкаE", typeof(IIS.Kursovaya7.Покупка));
                }
            }
            
            /// <summary>
            /// "ПокупкаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПокупкаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПокупкаL", typeof(IIS.Kursovaya7.Покупка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Покупка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПокупка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПокупка CustomAttributes)
    public class DetailArrayOfПокупка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya7.DetailArrayOfПокупка members)

        // *** End programmer edit section *** (IIS.Kursovaya7.DetailArrayOfПокупка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Покупка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Покупка.
        /// </summary>
        public DetailArrayOfПокупка(IIS.Kursovaya7.Автоматизация fАвтоматизация) : 
                base(typeof(Покупка), ((ICSSoft.STORMNET.DataObject)(fАвтоматизация)))
        {
        }
        
        public IIS.Kursovaya7.Покупка this[int index]
        {
            get
            {
                return ((IIS.Kursovaya7.Покупка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya7.Покупка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
