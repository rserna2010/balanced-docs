Credits
=======

A ``Credit`` resource represents a transaction consisting
of sending money to a bank account.

Credits have a ``status`` attribute representing the current status of the credit
throughout the payout process. There are three possible ``status`` values:

.. cssclass:: dd-noindent dd-marginbottom

  ``pending``
    As soon as the credit is created through the API, the status shows
    as ``pending``. This indicates that Balanced received the information for the
    credit and will begin processing. The ACH network itself processes transactions
    in a batch format. Batch submissions are processed at 3pm PST on business days.
    If the credit is created after 3pm PST, it will not be submitted for processing
    until **3pm PST** the next business day.
  ``succeeded``
    One business day after the batch submission, the status will change to
    ``succeeded``. That is the *expected* status of the credit. If the account
    number and routing number were entered correctly, the money should in fact
    be available to the seller. However, there is no immediate confirmation
    regarding the transaction showing up in the seller's account successfully.
  ``failed``
    The seller's bank has up to three business days from when the money *should*
    be available to indicate a rejection along with the rejection reason.
    Unfortunately, not all banks comply with ACH network policies and may respond
    after three business days with a rejection. As soon as Balanced receives the
    rejection, the status is updated to ``failed``.

|

.. container:: header3

  Available Query Filters

.. cssclass:: dl-horizontal dl-params filters

  .. dcode:: query Credits

.. note::
  :header_class: alert alert-tab
  :body_class: alert alert-green

  Bank accounts that only receive credits do **not** need to be verified.


Create a Credit
---------------

Send money to a bank account.

.. cssclass:: dl-horizontal dl-params

    .. dcode:: form credits.create

.. container:: code-white

  .. dcode:: scenario bank_account_credit


Fetch a Credit
-----------------

Fetch a previously created credit.

.. container:: method-description

  .. no request

.. container:: code-white

  .. dcode:: scenario credit_show


List All Credits
----------------

Fetch a list of all previously created credits. The credits
are returned in sorted order, with the most recent credits appearing
first.

.. cssclass:: dl-horizontal dl-params

  ``limit``
      *optional* integer. Defaults to ``10``.

  ``offset``
      *optional* integer. Defaults to ``0``.

.. container:: code-white

  .. dcode:: scenario credit_list


List All Credits for a Bank Account
-----------------------------------

Returns a list of previously created credits to a specific bank account.
The credits are returned in sorted order, with the most recent credits
appearing first.

.. container:: code-white

  .. dcode:: scenario credit_list_bank_account


Update a Credit
---------------

Update information for an existing credit.

.. cssclass:: dl-horizontal dl-params

  .. dcode:: form credits.update

.. container:: code-white

  .. dcode:: scenario credit_update

