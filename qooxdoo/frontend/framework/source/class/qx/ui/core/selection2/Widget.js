/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)

************************************************************************ */

qx.Class.define("qx.ui.core.selection2.Widget",
{
  extend : qx.ui.core.selection2.Abstract,



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function(widget)
  {
    this.base(arguments);

    this._widget = widget;
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /*
    ---------------------------------------------------------------------------
      WIDGET API
    ---------------------------------------------------------------------------
    */

    // property apply
    _applyLeadItem : function(value, old)
    {
      if (old) {
        old.removeState("lead");
      }

      if (value) {
        value.addState("lead");
      }
    },


    // property apply
    _applyAnchorItem : function(value, old)
    {
      if (old) {
        old.removeState("anchor");
      }

      if (value) {
        value.addState("anchor");
      }
    },


    // overridden
    _itemToHashCode : function(item) {
      return item.$$hash;
    },


    // overridden
    _styleItemSelected : function(item) {
      item.addState("selected");
    },


    // overridden
    _styleItemUnselected : function(item) {
      item.removeState("selected");
    },





    /*
    ---------------------------------------------------------------------------
      SCROLLAREA API
    ---------------------------------------------------------------------------
    */

    // overridden
    _scrollItemIntoView : function(item) {
      this._widget.scrollItemIntoView(item);
    },





    /*
    ---------------------------------------------------------------------------
      SELECTABLE INTERFACE API
    ---------------------------------------------------------------------------
    */

    // overridden
    _getItems : function(item) {
      return this._widget.getItems();
    },


    // overridden
    _getItemRange : function(item1, item2) {
      return this._widget.getItemRange(item1, item2);
    },


    // overridden
    _getFirstItem : function() {
      return this._widget.getFirstItem();
    },


    // overridden
    _getLastItem : function() {
      return this._widget.getLastItem();
    },


    // overridden
    _getItemAbove : function(rel) {
      return this._widget.getItemAbove(rel);
    },


    // overridden
    _getItemUnder : function(rel) {
      return this._widget.getItemUnder(rel);
    },


    // overridden
    _getItemLeft : function(rel) {
      return this._widget.getItemLeft(rel);
    },


    // overridden
    _getItemRight : function(rel) {
      return this._widget.getItemRight(rel);
    },


    // overridden
    _getItemPageUp : function(rel) {
      return this._widget.getItemPageUp(rel);
    },


    // overridden
    _getItemPageDown : function(rel) {
      return this._widget.getItemPageDown(rel);
    }
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function() {
    this.disposeFields("_widget");
  }
});
