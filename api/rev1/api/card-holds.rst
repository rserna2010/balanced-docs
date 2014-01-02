.. _card-holds:

Card Holds
==========

Holds are a type of authorization that reserves (i.e. holds) a dollar amount
on the customer's credit card, usually within 7 days.

A successful hold can be captured, and as a result, creates a
:ref:`debit <debits>`.


Create a New Card Hold
----------------------

Creates a hold against a card. Returns a ``uri`` that can later be used to
create a debit, up to the full amount of the hold.

.. cssclass:: dl-horizontal dl-params

  .. dcode:: form holds.create

.. container:: code-white

  .. dcode:: scenario card_hold_create


Get a Card Hold
---------------

Retrieves the details of a hold that you've previously created. Use the
``uri`` that was previously returned, and the corresponding hold
information will be returned.

.. container:: method-description

  .. no request

.. container:: code-white

   .. dcode:: scenario card_hold_show


Update a Card Hold
------------------

Updates information about a hold

.. cssclass:: dl-horizontal dl-params

  .. dcode:: form holds.update

.. container:: code-white

   .. dcode:: scenario card_hold_update


List all Card Holds
-------------------

Returns a list of holds you've previously created. The holds are returned
in sorted order, with the most recent holds appearing first.

.. container:: code-white

   .. dcode:: scenario card_hold_list


Capture a Card Hold
-------------------

Captures a hold. This creates a :ref:`debit <debits>`.

.. container:: code-white

   .. dcode:: scenario card_hold_capture


Void a Card Hold
----------------

Voids a hold. This cancels the hold. After voiding, the hold can no longer
be captured. This operation is irreversible.

.. cssclass:: dl-horizontal dl-params

  .. dcode:: form holds.update

.. container:: code-white

   .. dcode:: scenario card_hold_void